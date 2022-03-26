export class UserModel {
    firstName: String;
    lastName: String;
    gender: String;
    thumbnail: String;
    photo: String;
    favorite: Boolean = false;

    constructor(response?: any){
        this.firstName = response.name.first;
        this.lastName = response.name.last;
        this.gender = response.gender;
        this.thumbnail = response.picture.thumbnail;
        this.photo = response.picture.medium;
    }

}
