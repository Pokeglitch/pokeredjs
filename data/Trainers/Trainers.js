let TrainersJSON = json('./Trainers.json'),
    Trainers = new Collection();

class TrainerData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
    }
}

Object.keys(TrainersJSON).forEach(id => {
    let trainer = new TrainerData(id, TrainersJSON[id]);
    Trainers.add( trainer );
});
