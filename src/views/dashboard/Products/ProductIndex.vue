<template>
    <Layout>
        <div class="row" id="table">
        <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Post Table</h4>
            <router-link to="/user/product/create" class="btn btn-info">Add Product</router-link>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Current Price</th>
                            <th>Old Price</th>
                            <th>Image</th>
                            <td>Category</td>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index">
                            <td>
                                {{ index+1 }}
                            </td>
                            <td>{{ product.title }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.old_price }}</td>
                            <td class="py-1">
                                <img v-for="(image, index) in product.product_images" :key="index" :src="image.url" alt="image">
                            </td>
                            <td>{{ product.category_id }}</td>
                            <td>
                                <div class="d-flex">
                                    <a href="" class="btn btn-sm btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg></a>
                                    <form action="" method="POST">
                                        <button type="submit" class="btn btn-sm btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
    </Layout>
</template>
<script>
    import axios_client from '../../../axios-client';
import Layout from '../Layout.vue';
    export default{
        data(){
            return{
                products : []
            }
        },
        components:{
            Layout
        },
        mounted(){
            this.getProducts()
        },
        methods:{
            getProducts(){
                axios_client.get('/v1/product')
                    .then((response)=>{
                        this.products = response.data.data;
                        console.log(response.data.data[2].product_images);
                    })
                    .catch(errors=>{
                        console.log(errors);
                    })
            }
        }
    }
</script>
