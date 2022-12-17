import KeyRepositorie from '../repositories/Key_Repositories.js'

class KeyUserCase {
  async keyCase (email, key) {
    if ((await new KeyRepositorie().findKey(key)).length > 0) return
    if ((await new KeyRepositorie().findKey(email)).length > 0) return

    const saveUser = await new KeyRepositorie().creatKey(email, key)
    return saveUser
  }
}

export default KeyUserCase
