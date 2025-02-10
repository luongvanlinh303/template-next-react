// ** MUI Imports
import { TextFieldProps, TextField, styled } from '@mui/material'

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => {
  console.log({ theme })

  return {
    '& .MuiInputLabel-root': {
      transform: 'none',
      lineHeight: 1.2,
      position: 'relative',
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.body2.fontSize
    }
  }
})

const CustomTextField = (props: TextFieldProps) => {
  const { size = 'small', InputLabelProps, variant = 'filled', ...rest } = props

  return (
    <TextFieldStyled size={size} variant={variant} InputLabelProps={{ ...InputLabelProps, shrink: true }} {...rest} />
  )
}

export default CustomTextField
