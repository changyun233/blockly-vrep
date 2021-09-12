Blockly.Blocks['vrepinitial'] = {
  init: function() {
    this.appendValueInput("serverip")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("serverip"), "ip");
    this.appendValueInput("serverport")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("port"), "port");
    this.appendValueInput("jointarray")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("jointArray"), "jointArray");
    this.appendValueInput("clientID")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("clientID"), "clientID");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("vrepInitial");
 this.setHelpUrl("");
  }
};
Blockly.Python['vrepinitial'] = function(block) {
  var text_ip = block.getFieldValue('ip');
  var value_serverip = Blockly.Python.valueToCode(block, 'serverip', Blockly.Python.ORDER_ATOMIC);
  var text_port = block.getFieldValue('port');
  var value_serverport = Blockly.Python.valueToCode(block, 'serverport', Blockly.Python.ORDER_ATOMIC);
  var text_jointarray = block.getFieldValue('jointArray');
  var value_jointarray = Blockly.Python.valueToCode(block, 'jointarray', Blockly.Python.ORDER_ATOMIC);
  var text_clientid = block.getFieldValue('clientID');
  var value_clientid = Blockly.Python.valueToCode(block, 'clientID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var initialo = 'import vrep\n  from time import sleep\n  import numpy as np  from math import pi, cos, sin, atan2, sqrt, acos\n  from numpy.linalg import norm\n';
  var code = 'vrep.simxFinish(-1)\n  clientID = vrep.simxStart(\''+ value_serverip +'\','+text_port+', True, True, 5000, 5)';
  var final1='res, value_jointarray[0] = vrep.simxGetObjectHandle(clientID, \'Robot_joint1\', vrep.simx_opmode_blocking)';
  var final2='res, value_jointarray[1] = vrep.simxGetObjectHandle(clientID, \'Robot_joint2\', vrep.simx_opmode_blocking)';
  var final3='res, value_jointarray[2] = vrep.simxGetObjectHandle(clientID, \'Robot_joint3\', vrep.simx_opmode_blocking)';
  var final4='res, value_jointarray[3] = vrep.simxGetObjectHandle(clientID, \'Robot_joint4\', vrep.simx_opmode_blocking)';
  return initialo+'\n'+code+'\n'+final1+'\n'+final2+'\n'+final3+'\n'+final4;
};
Blockly.Blocks['vreptest'] = {
  init: function() {
    this.appendValueInput("serverip")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("serverip"), "ip");
    this.appendValueInput("serverport")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("port"), "port");
    this.appendValueInput("jointarray")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("jointArray"), "jointArray");
    this.appendValueInput("clientID")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("clientID"), "clientID");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("vrepInitial");
 this.setHelpUrl("");
  }
};
Blockly.Python['vreptest'] = function(block) {
  var text_ip = block.getFieldValue('ip');
  var value_serverip = Blockly.Python.valueToCode(block, 'serverip', Blockly.Python.ORDER_ATOMIC);
  var text_port = block.getFieldValue('port');
  var value_serverport = Blockly.Python.valueToCode(block, 'serverport', Blockly.Python.ORDER_ATOMIC);
  var text_jointarray = block.getFieldValue('jointArray');
  var value_jointarray = Blockly.Python.valueToCode(block, 'jointarray', Blockly.Python.ORDER_ATOMIC);
  var text_clientid = block.getFieldValue('clientID');
  var value_clientid = Blockly.Python.valueToCode(block, 'clientID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var initialo = 'import vrep\n  from time import sleep\n  import numpy as np  from math import pi, cos, sin, atan2, sqrt, acos\n  from numpy.linalg import norm\n';
  var code = 'vrep.simxFinish(-1)\n  clientID = vrep.simxStart(\''+ value_serverip +'\','+text_port+', True, True, 5000, 5)';
  var final1='res, value_jointarray[0] = vrep.simxGetObjectHandle(clientID, \'Robot_joint1\', vrep.simx_opmode_blocking)';
  var final2='res, value_jointarray[1] = vrep.simxGetObjectHandle(clientID, \'Robot_joint2\', vrep.simx_opmode_blocking)';
  var final3='res, value_jointarray[2] = vrep.simxGetObjectHandle(clientID, \'Robot_joint3\', vrep.simx_opmode_blocking)';
  var final4='res, value_jointarray[3] = vrep.simxGetObjectHandle(clientID, \'Robot_joint4\', vrep.simx_opmode_blocking)';
  return initialo+'\n'+code+'\n'+final1+'\n'+final2+'\n'+final3+'\n'+final4;
};
Blockly.Blocks['vrepsave'] = {
  init: function() {
    this.appendValueInput("serverip")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("serverip"), "ip");
    this.appendValueInput("serverport")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("port"), "port");
    this.appendValueInput("jointarray")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("jointArray"), "jointArray");
    this.appendValueInput("clientID")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("clientID"), "clientID");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("vrepInitial");
 this.setHelpUrl("");
  }
};
Blockly.Python['vrepsave'] = function(block) {
  var text_ip = block.getFieldValue('ip');
  var value_serverip = Blockly.Python.valueToCode(block, 'serverip', Blockly.Python.ORDER_ATOMIC);
  var text_port = block.getFieldValue('port');
  var value_serverport = Blockly.Python.valueToCode(block, 'serverport', Blockly.Python.ORDER_ATOMIC);
  var text_jointarray = block.getFieldValue('jointArray');
  var value_jointarray = Blockly.Python.valueToCode(block, 'jointarray', Blockly.Python.ORDER_ATOMIC);
  var text_clientid = block.getFieldValue('clientID');
  var value_clientid = Blockly.Python.valueToCode(block, 'clientID', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var initialo = 'import vrep\n  from time import sleep\n  import numpy as np  from math import pi, cos, sin, atan2, sqrt, acos\n  from numpy.linalg import norm\n';
  var code = 'vrep.simxFinish(-1)\n  clientID = vrep.simxStart(\''+ value_serverip +'\','+text_port+', True, True, 5000, 5)';
  var final1='res, value_jointarray[0] = vrep.simxGetObjectHandle(clientID, \'Robot_joint1\', vrep.simx_opmode_blocking)';
  var final2='res, value_jointarray[1] = vrep.simxGetObjectHandle(clientID, \'Robot_joint2\', vrep.simx_opmode_blocking)';
  var final3='res, value_jointarray[2] = vrep.simxGetObjectHandle(clientID, \'Robot_joint3\', vrep.simx_opmode_blocking)';
  var final4='res, value_jointarray[3] = vrep.simxGetObjectHandle(clientID, \'Robot_joint4\', vrep.simx_opmode_blocking)';
  return initialo+'\n'+code+'\n'+final1+'\n'+final2+'\n'+final3+'\n'+final4;
};