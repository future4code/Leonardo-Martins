<!-- Exercício 1 -->

a)
  interface User {name: string, balance: number}

b) function performPurchase (user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value
		}
	}
	return undefined
}

<!-- Exercício 2 -->

a) test("Saldo maior do que o valor da compra", () => {
	const user: User = {
		name: "Leonardo",
		balance: 120
	}

	const result = performPurchase(user, 40)

	expect(result).toEqual({
		name: "Leonardo",
		balance: 80
	})
})

b)test("Saldo igual ao valor da compra", () => {
	const user: User = {
		name: "Léo",
		balance: 100
	}

	const result = performPurchase(user, 100)

	expect(result).toEqual({
		name: "Léo",
		balance: 0
	})
})

c) test("Saldo menor do que o valor da compra", () => {
	const user: User = {
		name: "João",
		balance: 30
	}

	const result = performPurchase(user, 50)

	expect(result).not.toBeDefined()
})
