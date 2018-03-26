import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/components/index'
import vServer from '@/components/server'
import Case from '@/components/case'
import Team from '@/components/team'
import About from '@/components/about'

export default new Router({
  routes: [
    {
		path:'/',
		redirect:'/index',
	},
	{
		path:'/index',
		name:'index',
		component:Index
	},			
	{
		path:'/server',
		name:'server',
		component:vServer
	},
	{
		path:'/case',
		name:'case',
		component:Case
	},
	{
		path:'/team',
		name:'team',
		component:Team
	},
	{
		path:'/about',
		name:'about',
		component:About
	},
  ]
})

