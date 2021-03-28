const fs = require('fs')
const { resolve } = require('path')

const iconSrcPath = resolve(__dirname, '../heroicons/src')
const pkgsPath = resolve(__dirname, '../packages')
const iconTypes = fs.readdirSync(iconSrcPath)
  .filter(file => !file.startsWith('.'))

const vueIconTemplate = fs.readFileSync(resolve(__dirname, '../templates/vueIcon.js')).toString()

const getIconVars = icon => {
  const vars = {
    SVG_INNER: icon.paths.join(''),
    PASCAL_NAME: icon.name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(''),
    WIDTH: icon.size[0],
    HEIGHT: icon.size[1],
  }
  switch (icon.type) {
    case 'outline':
      vars.FILL = 'none'
      vars.STROKE = 'currentColor'
      break
    case 'solid':
      vars.PASCAL_NAME += 'Solid'
      vars.FILL = 'currentColor'
      vars.STROKE = 'none'
      break
  }
  return vars
}
const hydrateTemplate = (template, vars) => {
  const pattern = `\\$(${Object.keys(vars).join('|')})\\b`
  return template.replace(new RegExp(pattern, 'g'), m => vars[m.slice(1)])
}

// Load Icons
console.log('Loading Icons')

const allIcons = []

for (const iconType of iconTypes) {
  const typePath = resolve(iconSrcPath, iconType)
  const icons = fs.readdirSync(typePath)
    .filter(file => !file.startsWith('.'))
    .map(file => file.replace('.svg', ''))
  for (const icon of icons) {
    const svg = fs.readFileSync(resolve(typePath, `${icon}.svg`)).toString()
    allIcons.push({
      name: icon,
      type: iconType,
      paths: svg.match(/<path[^\/]*\/>/g),
      size: svg.match(/viewBox="0 0 (\d+) (\d+)"/).slice(1, 3),
    })
  }
}

// Generate Vue Components
console.log('Generating Vue Components')

const vueComponentsPath = resolve(pkgsPath, 'vue-heroicons/components')

fs.rmSync(vueComponentsPath, { recursive: true, force: true })
fs.mkdirSync(vueComponentsPath)

for (const icon of allIcons) {
  const vars = getIconVars(icon)
  const component = hydrateTemplate(vueIconTemplate, vars)
  fs.writeFileSync(resolve(vueComponentsPath, `${vars.PASCAL_NAME}.js`), component)
}
