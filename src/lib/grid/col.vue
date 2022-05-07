<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {type: Object, validator},
    narrow: {type: Object, validator},
    pc: {type: Object, validator},
    wide: {type: Object, validator},
  },
  data() {
    return {
      gutter: 0
    }
  },
  methods: {
    createClasses(obj, str = '') {
      if (!obj) return []
      let array = []
      if (obj.span) {
        array.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`)
      }
      return array
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrow, pc, wide} = this
      // xxx && `xxx-${xxx}` 如果存在则使用后面的，如果不存在则无
      let createClasses = this.createClasses

      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, [`ipad-`]),
        ...createClasses(narrow, [`narrow-`]),
        ...createClasses(pc, [`pc-`]),
        ...createClasses(wide, [`wide-`]),
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $m from 1 through 24 {
    &.#{$class-prefix}#{$m} {
      margin-left: ($m / 24) * 100%;
    }
  }

  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-ipad-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: col-narrow-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-narrow-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }

  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-pc-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    $class-prefix: col-wide-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-wide-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }
}
</style>