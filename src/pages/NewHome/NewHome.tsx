const Menus = [ "CV", "Game", "Chat" ]

import styled from 'styled-components'

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  width: 50vw;
`

const Selector = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  background-color: #f5f5f5;
  opacity: 0.8;
  border: 1px solid black;
  border-radius: 5px 10px 30px 10px;
  cursor: pointer;
  transition: 0.3s;
  color: black;
  &:hover {
	background-color: #e5e5e5;
	opacity: 1;
  }
`


function NewHome() {
	
	return (<>
		<Box className="animate__backInLeft" >
			{Menus.map((menu, key) => {
				return <Selector key={key}>{menu}</Selector>
			})}
		</Box>
	</>
)}
export default NewHome