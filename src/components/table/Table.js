/* eslint-disable max-len */
/* eslint-disable no-undef */
import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template'
import {tableResizeHandeler} from './tableResize'
import {shouldResize} from './tableFunctions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  // onClick() {
  //   console.log('onClick')
  // }

  // onMouseup() {
  //   console.log('mouseUp')
  // }
  // onMousemove() {
  //   console.log('mousemove')
  // }

  toHTML() {
    return createTable(20)
  }
  // Работает для ресайза сеюминутного, не оптимизировано
  // onMousedown(event) {
  //   if (event.target.dataset.resize) {
  //     const $resizer = $(event.target)

  //     // const $parent = $resizer.$el.parentNode // bad!
  //     // const $parent = $resizer.$el.closest('.column') // better but bad
  //     const $parent = $resizer.closest('[data-type="resizable"]')
  //     const coords = $parent.getCoords()
  //     const type = $resizer.data.resize
  //     const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

  //     document.onmousemove = (e) => {
  //       if (type == 'col') {
  //         const delta = e.pageX - coords.right
  //         const value = coords.width + delta
  //         $parent.css({width: value + 'px'})
  //         cells.forEach((el) => el.style.width = value + 'px')
  //       } else {
  //         const delta = e.pageY - coords.bottom
  //         const value = coords.height + delta
  //         $parent.css({height: value + 'px'})
  //       }
  //     }

  //     document.onmouseup = () => {
  //       document.onmousemove = null
  //     }
  //   }
  // }

  onMousedown(event) {
    if (shouldResize(event)) {
      tableResizeHandeler(this.$root, event)
    }
  }
}
