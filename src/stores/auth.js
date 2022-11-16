import { reactive } from 'vue'
import router from '/src/router';
export const auth = reactive({
    user : {
        name: localStorage.getItem("name") ?? "Markus",
        surname: localStorage.getItem("surname") ?? "Vilcans",
        code: localStorage.getItem("code") ?? "IT20003",
        favorite_songs : localStorage.getItem("favorite_songs") ?? []
    },
    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
      localStorage.setItem("name", name);
      this.user.name = name;
      localStorage.setItem("surname", surname);
      this.user.surname = surname;
      localStorage.setItem("code", code);
      this.user.code = code;
    },
    
    authenticate(email, password) {
        if (email == "markus.vilcans@va.lv" && password == "420420") {
           localStorage.is_authenticated = true;
           this.is_authenticated = true;
           router.replace('/')
        }
    },
    
    logout() {
        localStorage.clear();
        this.is_authenticated = false;
        router.replace('/login')
    },
    
    toggleFavorite(songID) {
        this.user.favorite_songs.forEach((song, index) => {
          if (song != songID) {
            this.user.favorite_songs.push(songID);
          } else {
            this.user.favorite_songs.pop(songID);
          }
        });
    
        localStorage.setItem("favorite_songs", this.user.favorite_songs);
      },
    
      getFavoriteSongs() {
        return this.user.favorite_songs;
      }
    });
