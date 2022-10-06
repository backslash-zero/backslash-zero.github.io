import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from "@notionhq/client"

const notionClient = new Client({ auth: process.env.NOTION_API_KEY })
const block_id : string		= process.env.NOTION_BLOCK_ID!

const infos_id : string 	= process.env.NOTION_INFOS_ID!
const skills_id : string 	= process.env.NOTION_SKILLS_ID!
const code_id : string 		= process.env.NOTION_CODE_ID!
const studies_id : string 	= process.env.NOTION_STUDIES_ID!
const pro_id : string 		= process.env.NOTION_PRO_ID!
const outside_id : string 	= process.env.NOTION_OUTSIDE_ID!

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const NotionCVDatabase = async () => {
	
	// Get pages databases
	const responsePage = await notionClient.blocks.children.list(
		{
			block_id : block_id,
		}
	);
	// const response = await notionClient.databases.query({
	// 	database_id : database_id,
	// }); 
	
	return (responsePage.results)
}

const NotionDatabaseQuery = async (db_id : string) => {

	const response = await notionClient.databases.query({
		database_id : db_id,
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 
	return (response.results!)
}

const DatabasesIDs = async () : Promise<string[]> =>  {
	// Get all database id keys
	const databases_ids : string[] = (await NotionCVDatabase()).map(
		(db) => db.id
	)
	return (databases_ids)
}

const getInfos = async() =>  {
	let infosProperties : any[] = []
	const infos = await notionClient.databases.query({
		database_id : infos_id,
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 

	infosProperties = infos.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (infosProperties)
}

const getSkillsLanguages = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : skills_id,
		filter : {
			property : "Skills Type",
			select : {
				equals : "Language"
			}
		},
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getSkillsProg = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : skills_id,
		filter : {
			property : "Skills Type",
			select : {
				equals : "Programming Language"
			}
		},
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getSkillsTechs = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : skills_id,
		filter : {
			property : "Skills Type",
			select : {
				equals : "Frameworks / Libraries"
			}
		},
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getSkillsSoft = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : skills_id,
		filter : {
			property : "Skills Type",
			select : {
				equals : "Favorite Software"
			}
		},
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getSkillsOther = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : skills_id,
		filter : {
			property : "Skills Type",
			select : {
				equals : "Other"
			}
		},
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getStudies = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : studies_id,
		sorts: [
			{
			  property: 'Date Start',
			  direction: 'descending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getPro = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : pro_id,
		sorts: [
			{
			  property: 'Date Start',
			  direction: 'descending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getOutside = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : outside_id,
		sorts: [
			{
			  property: 'Name',
			  direction: 'ascending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

const getCodeProjects = async() =>  {
	let properties : any[] = []
	const result = await notionClient.databases.query({
		database_id : code_id,
		sorts: [
			{
			  property: 'tableid',
			  direction: 'ascending',
			},
		],
	}); 

	properties = result.results.map(
		(index) => {
			if ("properties" in index)
				return index.properties
			return;
		}
	)
	return (properties)
}

export {
	getInfos,
	getSkillsLanguages, 
	getSkillsProg, 
	getSkillsTechs, 
	getSkillsSoft,
	getSkillsOther,
	getStudies,
	getPro,
	getOutside,
	getCodeProjects,
}


