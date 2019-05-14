/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
	render() {
		const { siteConfig, language = '' } = this.props;
		const { baseUrl, docsUrl } = siteConfig;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		const langPart = `${language ? `${language}/` : ''}`;
		const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

		const SplashContainer = props => (
			<div className="homeContainer">
				<div className="homeSplashFade">
					<div className="wrapper homeWrapper">{props.children}</div>
				</div>
			</div>
		);

		const ProjectTitle = () => (
			<h2 className="projectTitle">
				{siteConfig.title}
				<small>{siteConfig.tagline}</small>
			</h2>
		);

		const PromoSection = props => (
			<div className="section promoSection">
				<div className="promoRow">
					<div className="pluginRowBlock">{props.children}</div>
				</div>
			</div>
		);

		const Button = props => (
			<div className="pluginWrapper buttonWrapper">
				<a className="button" href={props.href} target={props.target}>
					{props.children}
				</a>
			</div>
		);

		return (
			<SplashContainer>
				<div className="inner">
					<ProjectTitle siteConfig={siteConfig} />
					<PromoSection>
						<Button href="#try">Get Expo</Button>
						<Button href={docUrl('doc1.html')}>Example Link</Button>
						<Button href={docUrl('doc2.html')}>Example Link 2</Button>
					</PromoSection>
				</div>
				<div className="top-badges">
					<a target="_blank" href={"https://www.npmjs.com/package/" + siteConfig.packageName}>
						<img src={`https://img.shields.io/npm/v/${siteConfig.packageName}.svg`} alt="Npm version" />
					</a>
					<a target="_blank" href={"https://www.npmjs.com/package/" + siteConfig.packageName}>
						<img src={`https://img.shields.io/npm/dm/${siteConfig.packageName}.svg`} alt="Npm downloads" />
					</a>
					<a target="_blank" href={"https://david-dm.org/pankod/" + siteConfig.packageName}>
						<img src={`https://david-dm.org/pankod/${siteConfig.packageName}/status.svg`} alt="Dependencies status" />
					</a>
					<a target="_blank" href={`https://david-dm.org/pankod/${siteConfig.packageName}?type=dev`}>
						<img src={`https://david-dm.org/pankod/${siteConfig.packageName}/dev-status.svg`} alt="Devdependencies status" />
					</a>
					<a target="_blank" href={`https://travis-ci.com/pankod/${siteConfig.packageName}`}>
						<img src={`https://travis-ci.com/pankod/${siteConfig.packageName}.svg?branch=master`} alt="Build status" />
					</a>
				</div>
			</SplashContainer>
		);
	}
}

class Index extends React.Component {
	render() {
		const { config: siteConfig, language = '' } = this.props;
		const { baseUrl } = siteConfig;

		const Block = props => (
			<Container
				padding={['bottom', 'top']}
				id={props.id}
				background={props.background}>
				<GridBlock
					align="center"
					contents={props.children}
					layout={props.layout}
				/>
			</Container>
		);

		const FeatureCallout = () => (
			<div
				className="productShowcaseSection paddingBottom"
				style={{ textAlign: 'center' }}>
				<h2>Feature Callout</h2>
				<MarkdownBlock>These are features of this project</MarkdownBlock>
			</div>
		);

		const TryOut = () => (
			<Block id="try">
				{[
					{
						content: `You could try app on Expo SDK, install Expo App in your phone and scan barcode`,
						image: `${baseUrl}img/expo-logo.png`,
						imageAlign: 'left',
						title: 'Expo Ready! Get App Demo',
					},
				]}
			</Block>
		);

		const Description = () => (
			<Block background="dark">
				{[
					{
						content:
							'This is another description of how this project is useful',
						image: `${baseUrl}img/undraw_note_list.svg`,
						imageAlign: 'right',
						title: 'Description',
					},
				]}
			</Block>
		);

		const LearnHow = () => (
			<Block background="light">
				{[
					{
						content:
							'Each new Docusaurus project has **randomly-generated** theme colors.',
						image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
						imageAlign: 'right',
						title: 'Randomly Generated Theme Colors',
					},
				]}
			</Block>
		);

		const Features = () => (
			<Block layout="fourColumn">
				{[
					{
						content: 'Customizable',
						image: `${baseUrl}img/undraw_react.svg`,
						imageAlign: 'top',
						title: 'Customizable components',
					},
					{
						content: 'Multiple selections',
						image: `${baseUrl}img/undraw_operating_system.svg`,
						imageAlign: 'top',
						title: 'Multiple selections',
					},
					{
						content: 'Quickly view like Instagram',
						image: `${baseUrl}img/undraw_open_source.svg`,
						imageAlign: 'top',
						title: 'Quickly view',
					},
				]}
			</Block>
		);

		const Showcase = () => {
			if ((siteConfig.users || []).length === 0) {
				return null;
			}

			const showcase = siteConfig.users
				.filter(user => user.pinned)
				.map(user => (
					<a href={user.infoLink} key={user.infoLink}>
						<img src={user.image} alt={user.caption} title={user.caption} />
					</a>
				));

			const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

			return (
				<div className="productShowcaseSection paddingBottom">
					<h2>Who is Using This?</h2>
					<p>This project is used by all these people</p>
					<div className="logos">{showcase}</div>
					<div className="more-users">
						<a className="button" href={pageUrl('users.html')}>
							More {siteConfig.title} Users
            </a>
					</div>
				</div>
			);
		};

		return (
			<div>
				<HomeSplash siteConfig={siteConfig} language={language} />
				<div className="mainContainer">
					<Features />
					<FeatureCallout />
					<LearnHow />
					<TryOut />
					<Description />
					<Showcase />
				</div>
			</div>
		);
	}
}

module.exports = Index;
