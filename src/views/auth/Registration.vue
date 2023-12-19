<template>
    <Layout>
        <div class="col-md-8 ps-md-0">
    <div class="auth-form-wrapper px-4 py-5">
        <a href="#" class="noble-ui-logo logo-light d-block mb-2">Interactive</a>
        <h5 class="text-warning fw-normal mb-4">
            Create admin account.
        </h5>
        <form @submit.prevent="createUser" class="forms-sample">
            <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label text-info">Name</label>
                <input type="text" v-model="form.name" class="form-control" id="exampleInputUsername1" autocomplete="Username" placeholder="Your name" name="name" />
            </div>
            <div class="mb-3">
                <label for="userEmail" class="form-label text-info">Email address</label>
                <input type="email" v-model="form.email" class="form-control" id="userEmail" placeholder="Email" name="email" />
            </div>
            <div class="mb-3">
                <label class="form-label text-info" for="formFile">Image Upload</label>
                <input class="form-control"  @input="form.image = $event.target.files[0]" name="image" type="file" id="formFile">
            </div>
            <div class="mb-3">
                <label for="userPassword" class="form-label text-info">Password</label>
                <input type="password" v-model="form.password" class="form-control" id="userPassword" autocomplete="current-password" placeholder="Password" name="password" />
            </div>
            <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="authCheck" />
                <label class="form-check-label" for="authCheck">
                    Remember me
                </label>
            </div>
            <div>
                <button type="submit" class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0">
                    Sign up
                </button>
            </div>
        </form>
        <router-link to="/" class="d-block mt-3 text-info">Already a user? Sign in</router-link>
    </div>
</div>
    </Layout>
</template>
<script>
  import axios_client from '../../axios-client';
import Layout from './Layout.vue';
  export default{
    data(){
        return{
            form:{
                name : '',
                email : '',
                password : '',
                image : null
            }
        }
    },
    components:{
        Layout
    },
    methods:{
        createUser(){
            alert('enter')
            axios_client.postForm('/v1/user/register', this.form)
                .then(({data})=>{
                    localStorage.setItem('authToken', data.token)
                    localStorage.setItem('user', JSON.stringify(data.user))
                    this.$router.push('/user/dashboard');
                })
                .catch((errors)=>{
                    console.log(errors);
                })
        }
    }
  }
</script>