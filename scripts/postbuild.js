import { remove } from 'fs-extra'
import { rename } from 'fs'
// import 'dotenv/config'

await remove('build/assets')

rename('build/index.html', 'build/auth.html', () => {
    console.log('index.html renamed to auth.html')
})
