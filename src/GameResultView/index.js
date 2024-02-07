import {
  ShowResultContainer,
  ResultImageContainer,
  ResultTextContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props
  const {id, imageUrl} = opponentChoice

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImageContainer>
        <ResultTextContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice[1]} alt="Your Choice" />
        </ResultTextContainer>
        <ResultTextContainer>
          <ResultText>Opponent</ResultText>
          <ResultImageItem src={imageUrl} alt="Opponent Choice" />
        </ResultTextContainer>
      </ResultImageContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          Play Again
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
