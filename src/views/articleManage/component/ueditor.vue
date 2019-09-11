<template>
  <div>
    <!--下面通过传递进来的id完成初始化-->
    <script :id="randomId"  type="text/plain"></script>
  </div>
</template>

<script>
  // 需要修改  ueditor.config.js 的路径
  // var URL = window.UEDITOR_HOME_URL || '/static/ueditor_1/';
  // 主体文件引入
  import '../../../../public/utf8-jsp/ueditor.config.js'
  import '../../../../public/utf8-jsp/ueditor.all.min.js'
  import '../../../../public/utf8-jsp/lang/zh-cn/zh-cn.js'
  import '../../../../public/utf8-jsp/kityformula-plugin/addKityFormulaDialog.js'
  import '../../../../public/utf8-jsp/kityformula-plugin/defaultFilterFix.js'
  import '../../../../public/utf8-jsp/kityformula-plugin/getKfContent.js'

  // 主体文件引入
  export default {
    props: {
      // 配置可以传递进来
      // ueditorConfig:{}
    },
    data () {
      return {
        // 每个编辑器生成不同的id,以防止冲突
        randomId: 'editor_' + (Math.random() * 100000000000000000),
        // 编辑器实例
        instance: null
      }
    },
    //此时--el挂载到实例上去了,可以初始化对应的编辑器了
    mounted () {
      this.initEditor()
    },
    beforeDestroy () {
      // 组件销毁的时候，要销毁 UEditor 实例
      if (this.instance !== null && this.instance.destroy) {
        this.instance.destroy()
      }
    },
    methods: {
      initEditor () {
        //dom元素已经挂载上去了
          this.$nextTick(() => {
            const path = document.querySelector('#contextPath').value || ''
            this.instance = UE.getEditor(this.randomId, {
              serverUrl: `${path}/common/ueditor`,
              toolbars: [[
                'fullscreen',
                'source', '|', 'undo', 'redo', '|',
                'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                'directionalityltr', 'directionalityrtl', 'indent', '|',
                'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                'insertimage', 'emotion'
                ,'attachment'
              ]]
            })
            // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
            this.instance.addListener('ready', () => {
              this.$emit('ready', this.instance)
            })
          })
        }
    }
  }
</script>

<style lang="scss">

.ueditor {
  line-height: 1.4;
  height: 100%;

  .edui-editor-iframeholder.edui-default {
    height: 74% !important;
    width: 100% !important;
  }

  >.edui-default {
    height: 100%;

    .edui-editor {
      height: 100%;
      width: 100% !important;
    }

  }
}
</style>
