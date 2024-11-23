const assert = require("assert")
const Pedido = require("../pedido")

describe("Sistema de Pedidos - Hamburgueria", function() {
    let pedido

    this.beforeEach(function () {
        pedido = new Pedido()
    })

    it("deve adicionar itens ao pedido", function () {
        pedido.adicionarItem("Hambúrguer", 10.5)
    })
})