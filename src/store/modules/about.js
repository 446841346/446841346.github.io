import * as type from '../mutations_type'

const state = {
	mySkill : [
		{
			skillName:'Automated Build Tool',
			skillContent:[
				{
					title:'Webpack',
					name:'webpack',
					process:'85'
				},
				{
					title:'Gulp',
					name:'gulp',
					process:'80'
				},
				{
					title:'Grunt',
					name:'grunt',
					process:'70'
				}
			]
		},
		{
			skillName:'JavaScript',
			skillContent:[
				{
					title:'ECMAScript 5',
					name:'es5',
					process:'88'
				},
				{
					title:'ECMAScript 6',
					name:'es6',
					process:'83'
				}
			]
		},
		{
			skillName:'JavaScript FrameWork',
			skillContent:[
				{
					title:'JQuery',
					name:'jquery',
					process:'90'
				},
				{
					title:'Bootstrap',
					name:'bootstrap',
					process:'78'
				},
				{
					title:'Vue',
					name:'vue',
					process:'85'
				},
				{
					title:'React',
					name:'react',
					process:'70'
				}
			]
		},
		{
			skillName:'CSS Processor',
			skillContent:[
				{
					title:'LESS',
					name:'less',
					process:'87'
				},
				{
					title:'SASS',
					name:'sass',
					process:'78'
				}
			]
		},
	],
	myDscribtion :{
		normal:'I was born 1993 in GuangZhou , as my first time met with computer i was obessed with it , but off cause my parents had  prevented me to indulge in it . So far , i am a ',
		strong:'Font-End Engineer ^_^'
	}
};
const getters = {
	getSkillSchedule : state => state.skillSchedule,
	getMyDscribtion : state => state.myDscribtion,
	getMySkill : state => state.mySkill
};

export default {
  state,
  getters
}