class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else if (this._likes.length > 1) {
            return `${this._likes[0]} and ${this.likes.length - 1} others like this story!`;
        } else {
            return `${this.title} has 0 likes`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        }

        if (this.creator == username) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;

    }

    dislike(username) {
        const userIndex = this._likes.findIndex(u => u == username);
        if (userIndex < 0) {
            throw new Error(`You can't dislike this story!`);
        }

        this._likes.splice(userIndex, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (username && content && id) {
            let comment = this._comments.find(c => c['Id'] == id);
            if (comment != undefined) {
                comment['Replies'].push({
                    'Id': `${id}.${comment['Replies'].length + 1}`,
                    'Username': username,
                    'Content': content
                });
                return 'You replied successfully';
            }
        }
        if (username && content) {
            this._comments.push({
                'Id': this._comments.length + 1,
                'Username': username,
                'Content': content,
                'Replies': []
            });
            return `${username} commented on ${this.title}`;
        }

    }

    toString(sortingType) {
        let result = `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += `Comments:\n`;

        if (sortingType == 'asc') {
            this._comments.sort((a, b) => a['Id'] - b['Id'])
                .forEach(c => {
                    result += `-- ${c['Id']}. ${c['Username']}: ${c['Content']}\n`;
                    c['Replies'].sort((a, b) => a['Id'] - b['Id']).forEach(p => {
                        result += `--- ${p['Id']}. ${p['Username']}: ${p['Content']}\n`;
                    })
                });
        } else if (sortingType == 'desc') {
            this._comments.sort((a, b) => b['Id'] - a['Id'])
                .forEach(c => {
                    result += `-- ${c['Id']}. ${c['Username']}: ${c['Content']}\n`;
                    c['Replies'].sort((a, b) => b['Id'] - a['Id']).forEach(p => {
                        result += `--- ${p['Id']}. ${p['Username']}: ${p['Content']}\n`;
                    })
                });
        } else if (sortingType == 'username') {
            this._comments.sort((a, b) => a['Username'].localeCompare(b['Username']))
                .forEach(c => {
                    result += `-- ${c['Id']}. ${c['Username']}: ${c['Content']}\n`;
                    c['Replies'].sort((a, b) => a['Username'].localeCompare(b['Username'])).forEach(p => {
                        result += `--- ${p['Id']}. ${p['Username']}: ${p['Content']}\n`;
                    })
                });
        }

        return result.trim();
    }
}

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
//, "John liked My Story!");
console.log(art.likes);
//, "John likes this story!");
console.log(art.like("Ivan"));
//,"Ivan liked My Story!");
console.log(art.like("Steven"));
//, "Steven liked My Story!");

console.log(art.likes);
// "John and 2 others like this story!");
console.log(art.comment("Anny", "Some Content"));
//,"Anny commented on My Story");
console.log(art.comment("Ammy", "New Content", 1));
//"You replied successfully");
console.log(art.comment("Zane", "Reply", 2));
//,"Zane commented on My Story");
console.log(art.comment("Jessy", "Nice :)"));
//"Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2));
//, "You replied successfully");
