import { defineStore } from 'pinia';
import { api } from '../boot/axios';
import * as  typeInterface from '../types/TypeInterface.ts';



export const useProductStore = defineStore('product', {

    state: () => ({
        produto: [] as typeInterface.Produto[]
    }),

    actions: {

        async buscarProduto() {
            try {
                const res = await api.get('/products')

                this.produto = res.data
                console.log(res.data)
            } catch (error) {
                console.error(error)
            }
            return this.buscarProduto
        }

    }



})