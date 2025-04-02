import { createRoot } from "react-dom/client"

type UserWallet = {
  title: string
  amount: number
}

type UserWalletProps = {
  wallet: UserWallet
}

export const UserWallet = ({ wallet }: UserWalletProps) => {
  return (
    <p>
      title: {wallet.title}, amount: {wallet.amount}
    </p>
  )
}

export const UserMoney = () => {
  const wallets = [
    { title: "bitcoin", amount: 1 },
    { title: "$", amount: 100 },
  ]

  return (
    <div>
      <UserWallet wallet={xxx} />
      <UserWallet wallet={yyy} />
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<UserMoney />)

// Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
// Ответ дайте через пробел, например: props.x wallets
