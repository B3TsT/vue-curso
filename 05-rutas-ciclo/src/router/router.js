
import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard';

// import ListPage from '@/modules/pokemon/pages/ListPage'
// import AboutPage from '@/modules/pokemon/pages/AboutPage'
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
// import NoPageFound from "@/shared/pages/NoPageFound";

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */
                '../modules/pokemon/layouts/PokemonLayout'),
                children: [
                        {
                            path: 'home',
                            name: 'pokemon-home',
                            component: () => import(/* webpackChunkName: "ListPage" */
                                '../modules/pokemon/pages/ListPage')
                        },
                        {
                            path: 'about',
                            name: 'pokemon-about',
                            component: () => import(/* webpackChunkName: "AboutPage" */
                                '../modules/pokemon/pages/AboutPage')
                        },
                        {
                            path: 'pokemonid/:id',
                            name: 'pokemon-id',
                            component: () => import(/* webpackChunkName: "PokemonPage" */
                            '../modules/pokemon/pages/PokemonPage'),
                            props: (route) => {
                                const id = Number(route.params.id);
                                // console.log(route)
                                return isNaN(id) ? { id: 1 } : { id }
                                // const { id } = route.params
                                // {
                                // id: Number(id)
                                // id: 200,
                                // nombre: 'fernando',
                                // apillido: 'herrera'
                                // }
                            },
                        },
                        {
                            path: '',
                            name: 'redirect-pokemon',
                            redirect: {
                                name: 'pokemon-about'
                            },
                        }
                ],
    },

    // * DBZ LAYOUT
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: (isAuthenticatedGuard),
        component: ()=> import(/* webpackChunkName: "DragonBallLayout" */
        '@/modules/dbz/layouts/DragonBallLayout'),
        children:[
            {
                path: 'characters',
                name: 'dbz-characters',
                beforeEnter: (isAuthenticatedGuard),
                component: ()=> import(/* webpackChunkName: "Characters" */
                '@/modules/dbz/pages/Characters'),
            },
            {
                path: 'about',
                name: 'dbz-about',
                beforeEnter: (isAuthenticatedGuard),
                component: ()=> import(/* webpackChunkName: "About" */
                '@/modules/dbz/pages/About'),
            },
            {
                path: '',
                name: 'redirect-dbz',
                redirect: {
                    name: 'dbz-characters'
                }
            },
        ]
    },

    {
        path: '/:pathMatch(.*)*', component: () => import(/* webpackChunkName: "NoPageFound" */
            '@/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// *GUARD GLOBAL - SINCRONO
// router.beforeEach((to, from, next) =>{
//     console.log(to, from, next)
//     const random = Math.random() * 100
//     console.log(random)
//     if (random >50 ){
//         console.log('autenticado')
//         next()
//     } else {
//         console.log('bloqueado por el beforeEach Guard') 
//         next({name: 'pokemon-home'})
//     }

// })

// const canAccess = () =>{
//     return new Promise(resolve => {
//         const random = Math.random() * 100
//         console.log(random)
//         if (random >50 ){
//             console.log('autenticado - canAccess')
//             resolve(true)
//         } else {
//             console.log('bloqueado por el beforeEach Guard - canAccess') 
//             resolve(false)
//         }
//     })
// }

// router.beforeEach(async(to,from, next) => {
//     const authorized = await canAccess()
//     authorized ? next() : next({name: 'pokemon-home'})
// })

export default router