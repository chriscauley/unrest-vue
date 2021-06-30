import dedent from 'dedent';
import marked from 'marked';

function stringifyVNode(vnode) {
  if (vnode.tag) {
    const content = vnode.children ? vnode.children.map(stringifyVNode) : vnode.text;
    return `<${vnode.tag}>${content}</${vnode.tag}>`;
  }
  return vnode.text;
}

export default {
  props: {
    options: Object,
    dedent: {
      type: Boolean,
      default: () => true,
    },
    inline: Boolean,
    source: String,
  },

  render(props) {
    const { options, inline, source } = props;
    const text = props.dedent ? dedent(source) : source
    const innerHTML = (inline ? marked.parseInline : marked)(text, options)
    return inline ? <span innerHTML={innerHTML} /> : <div innerHTML={innerHTML} />
  },
};