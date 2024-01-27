import React from 'react';
import styled from 'styled-components';

const Main = (props) => {
	return <MainLayout>{props.children}</MainLayout>;
};

export default Main;

const MainLayout = styled.div`
	background-color: #fff;
	max-width: 1200px;
	min-width: 800px;
	margin: 0 auto;
	border-radius: 10px;
`;
