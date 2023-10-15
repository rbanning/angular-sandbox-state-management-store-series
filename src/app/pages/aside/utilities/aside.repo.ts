import { IAsideCategory, IAsideItem } from "./aside.interface";

export const categories: IAsideCategory[] = [
  {
    id: 'modules',
    name: 'Modules',
    icon: '/assets/aside/module-icon.png',
    snippet: 'Peek into how organize our modules'
  },
  {
    id: 'components',
    name: 'Components',
    icon: '/assets/aside/component-icon.png',
    snippet: 'Look at a variety of features involving components'
  },
  {
    id: 'directives',
    name: 'Directives',
    icon: '/assets/aside/directive-icon.png',
    snippet: 'Some ideas on how to use directives'
  },
  {
    id: 'services',
    name: 'Services',
    icon: '/assets/aside/service-icon.png',
    snippet: 'Examine our strategies involving use of services'
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    icon: '/assets/aside/tailwind-icon.png',
    snippet: 'TailwindCss specific strategies'
  },
];


export const items: IAsideItem[] = [
  //modules
  {
    id: 'core-module',
    name: 'Core Module',
    categoryId: 'modules',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },
  {
    id: 'shared-module',
    name: 'Shared Module',
    categoryId: 'modules',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },
  {
    id: 'feature-module',
    name: 'Feature Module',
    categoryId: 'modules',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },

  //components
  {
    id: 'ui-component',
    name: 'UI Component',
    categoryId: 'components',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },
  {
    id: 'ui-component',
    name: 'UI Component',
    categoryId: 'components',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },

  //directives
  {
    id: 'ui-directive',
    name: 'UI Directive',
    categoryId: 'directives',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },
  {
    id: 'anchor-directive',
    name: 'Anchor Directive',
    categoryId: 'directives',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },

  //services
  {
    id: 'singleton-service',
    name: 'Singleton Service',
    categoryId: 'services',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },
  {
    id: 'instance-service',
    name: 'Instance Service',
    categoryId: 'directives',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },


  //tailwind
  {
    id: 'theming-tailwind',
    name: 'Theming Tailwind',
    categoryId: 'tailwind',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },
  {
    id: 'tailwind-component',
    name: 'Tailwind Component',
    categoryId: 'tailwind',
    snippet: 'Quaerat deserunt ab corporis veniam pariatur nesciunt odit! Id, nulla.'
  },


];