describe('Главное приложение', () => {
    before(() => {
        cy.visit('/')
    })
    context('Тест 1', () => {
        it('Наличие элементов', () => {
            cy.get('#mainInput')
                .should('be.visible')
            cy.get('input[name="inpMore"]')
                .should('be.visible')
            cy.get('input[name="inpLess"]')
                .should('be.visible')
            cy.get('#btnConclude')
                .should('be.visible')
            cy.get('#pParseError')
                .should('not.exist');
            cy.get('#pResult')
                .should('not.exist');
        })

        it('Состояние элементов после загрузки', () => {
            cy.get('#mainInput')
                .should('have.value', '')
            cy.get('input[name="inpMore"]')
                .should('be.checked')
            cy.get('input[name="inpLess"]')
                .should('not.checked')
        })

        it('Наличие заголовков, подписей или надписей над элементами', () => {
            cy.get('h1')
                .should('have.text', 'Технологии тестирования ПО')
            cy.get('h2')
                .should('have.text', 'Вариант 5')
            cy.get('h3')
                .should('have.text', 'Ввести массив из 10 целых четырехзначных чисел. Сформировать и вывести новый массив, из тех чисел введенного массива, которые являются простыми числами и у этих чисел старшая цифра больше (меньше) последней цифры числа. Соотношение цифр задается пользователем. Если таких элементов нет, то выдать сообщение об этом.')
            cy.contains('Числа через пробел:')
            cy.contains('Соотношения цифр:')
        })

        it('Возможность выбора данных элементов и перевода их в различные состояния', () => {
            cy.get('#mainInput')
                .should('have.value', '')
                .type('1234')
                .should('have.value', '1234')
            cy.get('[name="inpMore"]').check()
                .should('be.checked')
            cy.get('[name="inpLess"]').check()
                .should('be.checked')
        })

        it('Управление элементами с помощью мыши и клавиатуры', () => {
            cy.reload()
            cy.focused()
                .should('have.id', 'mainInput')
                .type('1234 1234 1234 1234 1234 1234 1234 1234 2417 5231')
                .tab().tab()
                .should('have.attr', 'name', 'inpLess')
                .check()
                .should('be.checked')
                .tab()
                .click()
            cy.contains('Сформированный массив:')
        })

        it('Корректный ввод чисел (знак больше)', () => {
            cy.reload()
            cy.focused()
                .type('1234 1234 1234 1234 5231 1234 1234 1234 2417 5231')
            cy.get('#btnConclude')
                .click()
            cy.get('#res')
                .should('have.text', '5231, 5231')
        })

        it('Корректный ввод чисел (знак меньше)', () => {
            cy.reload()
            cy.focused()
                .type('1234 1234 1234 1234 1234 1234 1234 1234 2417 5231')
            cy.tab().tab()
                .check()
            cy.get('#btnConclude')
                .click()
            cy.get('#res')
                .should('have.text', '2417')
        })

        it('Корректный ввод чисел. Числа, удовлетворяющие условиям не найдены', () => {
            cy.reload()
            cy.focused()
                .type('1234 1234 1234 1234 1234 1234 1234 1234 1234 1234')
            cy.get('#btnConclude')
                .click()
            cy.get('#res')
                .should('have.text', 'Нет элементов, удовлетворяющих условию(')
        })

        it('Некорректный ввод значений. Меньше 10 чисел', () => {
            cy.reload()
            cy.focused()
                .type('1234 1234')
            cy.get('#btnConclude')
                .click()
            cy.get('#pParseError')
                .should('have.text', 'Нужно ввести 10 чисел!')
        })

        it('Некорректный ввод значений. Введено не четырехзначное число', () => {
            cy.reload()
            cy.focused()
                .type('12343242314 1234 3')
            cy.get('#btnConclude')
                .click()
            cy.get('#pParseError')
                .should('have.text', 'Значения заполнены некорректно')
        })
        
        it('Некорректный ввод значений. Введен символ, не являющийся цифрой', () => {
            cy.reload()
            cy.focused()
                .type('1234 ewqr 1324 f')
            cy.get('#btnConclude')
                .click()
            cy.get('#pParseError')
                .should('have.text', 'Значения заполнены некорректно')
        })

        it('Некорректный ввод значений. Поле оставлено пустым', () => {
            cy.reload()
            cy.get('#btnConclude')
                .click()
            cy.get('#pParseError')
                .should('have.text', 'Нужно ввести 10 чисел!')
        })
    })
});