function constructionCrew(workerInput){
    const worker = {
        weight: workerInput.weight,
        experience: workerInput.experience,
        levelOfHydrated: workerInput.levelOfHydrated,
        dizziness: false,
    };
    
    if (workerInput.dizziness == true) {
        worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
    }

    return worker;
}




constructionCrew('{ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }');
