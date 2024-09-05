import Stack from '@mui/material/Stack';
import * as React from "react";
import { BlogCardDescription, Header, CardHeader, ResearchCard, Root } from "./Research.styles";


export interface ResearchData {
	title : string,
	description : string,
	redirectionLink?: string,
}

export interface ResearchWork {
 	publications : ResearchData[];
}

const Research: React.FC<ResearchWork> = ({ publications }) => {

	const handleProjectOnClick = (url : string) => {
		console.log("Research Card Clicked");
		window.open(url);
	}

	return (
		<Root >
		<Header>Research Work & Publications</Header>
		<Stack
			spacing={4}
		>
			{Array.from(publications).map((publication, index) => (
				<ResearchCard>
					<Stack>
						<CardHeader><a href={publication.redirectionLink}>{publication?.title}</a></CardHeader>                        
						<BlogCardDescription>{publication?.description}</BlogCardDescription>
					</Stack>
				</ResearchCard>
			))}
		</Stack>
		</Root>
	)
}


export default Research;
