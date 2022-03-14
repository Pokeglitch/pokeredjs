let Trainers = json('./Trainers.json');

class TrainerData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
    }
}

Object.keys(Trainers).forEach(id => {
    let value = Trainers[id];
    Trainers[id] = new TrainerData(id, value);
});
