import 'egg'

declare module 'egg' {
    interface Controller {
        ctx: Context
    }
}
