import { Grid } from "@mui/material";
import * as React from "react";
import MicrosoftCopilot from './../../images/copilot.jpg';
import TwitterEgo from './../../images/TwitterEgo.jpg';
import Background2 from './../../images/carbonEmission.jpg';
import { BlogCard, BlogCardDescription, BlogCardHeader, BlogContent, Card, Header, Root } from "./PortfolioProjects.styles";
import { MaterialButton, MaterialButtonMini } from "../../pages/index.styles";


export interface ProjectData {
	title : string,
	description : string,
	imageUrl?: string,
	redirectionLink?: string,
}

export interface Projects {
 	projects: ProjectData[];
}


const projectImages = [MicrosoftCopilot, TwitterEgo, Background2];

const PortfolioProjects: React.FC<Projects> = ({ projects }) => {

	const handleProjectOnClick = (url : string | undefined) => {
		console.log("Project Card Clicked");
		window.open(url);
	}

	return (
		<Root >
		<Header>Portfolio Projects</Header>
		<Grid
			container
			direction="row"
			spacing={4}
		>
			{Array.from(projects).map((project, index) => (
				<Grid item xs={12} sm={6} md={4} lg={4} key={index}>
					<Card>
						<BlogCard style={{ backgroundImage: `url(${projectImages[index] ?? ""})`}}/>
						<BlogContent>
							<BlogCardHeader>{project?.title}</BlogCardHeader>
							<BlogCardDescription>{project?.description}</BlogCardDescription>
							<MaterialButtonMini onClick={() => {handleProjectOnClick(project?.redirectionLink)}}>View Project</MaterialButtonMini>
						</BlogContent>
					</Card>
				</Grid>
			))}
		</Grid>
		</Root>
	)
}


export default PortfolioProjects;
