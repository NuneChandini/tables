sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("table.tables.controller.View1", {
            onInit: function () {
            
            },
            handleselectionchange: function(oEvent){
              var oContext = oEvent.getParameter("listItem").getBindingContext().getObject();
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.navTo("Detail",{
                OrderID: oContext.OrderID
              });
            }
        });
    });
