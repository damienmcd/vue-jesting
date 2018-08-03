import { shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import App from '@/App.vue';
// import HelloWorld from '@/components/HelloWorld.vue';

describe('App.vue', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(App) // Create a copy of the original component
    vm = new cmp({
      data: { // Replace data value with this fake data
        messages: ['Bill']
      }
    }).$mount() // Instantiates and mounts the component
  })

  it('equals messages to ["Bill"]', () => {
    expect(vm.messages).toEqual(['Bill'])
  })
});

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
