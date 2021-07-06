import LgLink from '../src/link.vue'

export default {
  title: 'LgLink',
  component: LgLink
}

export const Link = _ => ({
  components: { LgLink },
  template: `
    <div>
      <lg-link href="http://www.baidu.com" :disabled="true">百度</lg-link>
    </div>
  `
})