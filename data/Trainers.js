let Trainers = json('./Trainers.json');

class TrainerData {
    constructor(name, data){
        this.Name = name;
        this.ID = data.ID;
    }
}

Object.keys(Trainers).forEach(name => {
    let value = Trainers[name];
    Trainers[name] = new TrainerData(name, value);
});
