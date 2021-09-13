Blockly.Blocks['Vrepconnect'] = {
  init: function() {
    this.appendValueInput("serverip")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("serverip"), "ip");
    this.appendValueInput("serverport")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("port"), "port");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("vrepInitial");
 this.setHelpUrl("");
  }
};
Blockly.Python['Vrepconnect'] = function(block) {
  var text_ip = block.getFieldValue('ip');
  var value_serverip = Blockly.Python.valueToCode(block, 'serverip', Blockly.Python.ORDER_ATOMIC);
  var text_port = block.getFieldValue('port');
  var value_serverport = Blockly.Python.valueToCode(block, 'serverport', Blockly.Python.ORDER_ATOMIC);
  var text_clientid = block.getFieldValue('clientID');
  var value_clientid = Blockly.Python.valueToCode(block, 'clientID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var initialo = 'import vrep\n  from time import sleep\n  import numpy as np  from math import pi, cos, sin, atan2, sqrt, acos\n  from numpy.linalg import norm\n';
  var code = 'vrep.simxFinish(-1)\n  clientID = vrep.simxStart('+ value_serverip +','+value_port+', True, True, 5000, 5)';
  return initialo+'\n'+code+'\n';
};
