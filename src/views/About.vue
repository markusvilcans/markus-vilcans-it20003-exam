<script>
import { auth } from '/src/stores/auth.js'
export default {
    data() {
        return {
            canSeeEdit: false,
            canSeeAbout: true,
            auth,

            newName: auth.user.name,
            newSurname: auth.user.surname,
            newCode: auth.user.code,
        }
    },
    methods: {
        EditorOn() {
            this.canSeeEdit = !this.canSeeEdit;
            this.canSeeAbout = !this.canSeeAbout;
        },
        saveButtonStuff() {
            this.canSeeEdit = false;
            this.canSeeAbout = true;
            this.auth.setUserData(this.newName,this.newSurname,this.newCode);
        }
    }
}
</script>

<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <div v-if="canSeeAbout"><button id="btn-show-favorites" @click="EditorOn()" v-bind:class="{}">Edit Form</button></div>
                <div v-if="canSeeEdit"><button id="btn-show-favorites" @click="EditorOn()" v-bind:class="{active: canSeeEdit}">Cancel</button></div>
                <div v-if="canSeeEdit"><button id="btn-save" @click="saveButtonStuff()" v-bind:class="{
                }">Save Form</button></div>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <input v-if="canSeeEdit" v-model="newName" id="input-name" />
                <p v-if="canSeeAbout" id="txt-name">{{auth.user.name}}</p>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <input v-if="canSeeEdit" v-model="newSurname" id="input-surname" />
                <p v-if="canSeeAbout" id="txt-surname">{{auth.user.surname}}</p>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <input v-if="canSeeEdit" v-model="newCode" id="input-code" />
                <p v-if="canSeeAbout" id="txt-code">{{auth.user.code}}</p>
            </div>
            <div class="wrapper-songs">
                <label>FAVORITE SONGS</label>
                <ul>
                    <li>
                        <img id="img-album" src="https://images.genius.com/f4070376322053f8aee83f60c88710cb.1000x1000x1.png" />
                        <div class="song-info">
                            <p id="txt-song" class="song-name">The Number You Have Dialed is Not in Service</p>
                            <p id="txt-artist" class="song-artists">$uicideBoy$</p>
                        </div>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>