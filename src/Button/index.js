import {ButtonContainer, ButtonImage, ImageItem} from './styledComponents'

const Button = props => {
  const {buttonDetails, getButtonId} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    getButtonId(id, imageUrl)
  }
  return (
    <ButtonContainer>
      <ButtonImage
        type="button"
        onClick={onClickButton}
        data-testid={`${lowerCaseId}Button`}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonContainer>
  )
}

export default Button
