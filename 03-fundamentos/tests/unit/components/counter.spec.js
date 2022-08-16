import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'
import { TestWatcher } from 'jest'

describe('Counter Component', () => {

    // test('Debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()

    // })

    test('h2 debe tener el valor por defecto "Counter"', () => {
        const wrapper = shallowMount(Counter)
        //find solo retorna el primer valor h2 si quieres retornar todos
        //los valores h2 se usa el .findAll()
        // const h2 = wrapper.find('h2')
        // console.log(h2.text())
        // expect(h2.text()).toBe('Counter')

        expect(wrapper.find('h2').exists()).toBeTruthy() //.toBe('true')

        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el <p>', () => {

        //wrapper
        const wrapper = shallowMount(Counter)

        //pTags
        //const pTags = wrapper.findAll('p') //funciona pero es muy volatil
        const value = wrapper.find('[data-testid="counter"]').text()

        //expect segundo p === 1000
        // expect(pTags[1].text()).toBe('100')
        expect(value).toBe('100')

    })

    test('Debe de incrementar y decrementar el contador', async () => {

        const wrapper = shallowMount(Counter)

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')

    })

})