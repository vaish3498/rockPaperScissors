import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Button from '../Button'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  ItemsImageContainer,
  PlayAgainButton,
  PopUpContainer,
  PopUpButton,
  RuleImageContainer,
  RulesImage,
  CloseLineContainer,
  CloseLineButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    const {id, imageUrl} = opponentChoice

    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)

    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImage = () => {
    const {choicesList} = this.props
    return (
      <ItemsImageContainer>
        {choicesList.map(eachItem => (
          <Button
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImageContainer>
    )
  }

  render() {
    const {myChoice, score, showResult, opponentChoice} = this.state

    return (
      <MainContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>Rock Paper Scissors</Heading>
          </ItemsContainer>
          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetImage()}
        <PopUpContainer>
          <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RuleImageContainer>
                <CloseLineContainer>
                  <CloseLineButton
                    type="button"
                    onClick={() => close()}
                    data-testid="rockButton"
                  >
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RuleImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
