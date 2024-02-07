import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
`
export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
`
export const ScoreCardContainer = styled.div`
  margin: 10px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
`
export const ParagraphScore = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #223a5f;
  font-weight: bold;
  text-align: center;
  margin: 0px;
`
export const ScoreSpan = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: #223a5f;
  font-weight: bold;
  text-align: center;
  margin: 0px;
`
export const ItemsImageContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px;
  height: 100%;
  width: 50%;
`
export const PlayAgainButton = styled.button`
  border: 0px;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 15px;
  color: #223a5f;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`
export const RuleImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const CloseLineButton = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`
