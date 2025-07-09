import calculateTermDepositReturn from './src/calculateTermDepositReturn.js'

export default function App() {
  return (
    <>
      <h1>Tim Lacey's Term Deposit Calculator</h1>
      <p>Hello. {calculateTermDepositReturn(1000, 5, 4, 36)}</p>
    </>
  )
}