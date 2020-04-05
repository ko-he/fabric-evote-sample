import React from 'react'
import { vortersService } from '../services'

type RegisterVoterPageProps = {}

const RegisterVoterPage: React.FC<RegisterVoterPageProps> = _props => {
  const [voterId, setVoterId] = React.useState('')
  const [registerId, setRegisterId] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')

  const handleChangeDriversLicense = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value
      setVoterId(inputValue)
    },
    []
  )

  const handleChangeRegisterId = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value
      setRegisterId(inputValue)
    },
    []
  )

  const handleChangeFirstName = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value
      setFirstName(inputValue)
    },
    []
  )

  const handleChangeLastName = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value
      setLastName(inputValue)
    },
    []
  )

  const handleSubmit = React.useCallback(
    async(e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault()
      const response = await vortersService
        .register(voterId, registerId, firstName, lastName)

      console.log(response)
    },
    [voterId, registerId, firstName, lastName]
  )

  return(
    <>
      <p>RegisterVoterPage</p>
      <div className="form">
        <p>
          <input
            type="text"
            placeholder="Drivers License"
            onChange={handleChangeDriversLicense}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Registrar ID"
            onChange={handleChangeRegisterId}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="first name"
            onChange={handleChangeFirstName}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="last name"
            onChange={handleChangeLastName}
          />
        </p>
        <p><input type="submit" onClick={handleSubmit}/></p>
      </div>
    </>
  )
}

export default RegisterVoterPage