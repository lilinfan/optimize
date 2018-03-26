import Index from './components/index.vue'
import vServer from './components/server.vue'
import Case from './components/case.vue'
import Team from './components/team.vue'
import About from './components/about.vue'
const routers = [
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
export default routers