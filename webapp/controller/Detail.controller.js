sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("table.tables.controller.Detail", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Detail").attachPatternMatched(this._onRouteMatch,this);
            },
            _onRouteMatch: function(oEvent){
                var orderID = oEvent.getParameter('arguments').OrderID;
                sap.m.MessageToast.show(orderID);
                var sPath = "/Orders("+ orderID +")";
                var oModel = this.getOwnerComponent().getModel();
                var that = this;
                
                oModel.read( sPath, {
                    success: function(oData){
                        var jModel = new sap.ui.model.json.JSONModel(oData);
                        that.getView().byId("SimpleFormChange354").setModel(jModel);
                        
                    },
                    error:function(oError){
                        sap.m.MessageToast.show("error in loading deatils");

                    }
                });

            }
        });
    });
