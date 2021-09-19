Blockly.Blocks['Vrepconnect'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Vrep_ip")
      .appendField(new Blockly.FieldTextInput("127.0.0.1"), "ip");
    this.appendDummyInput()
      .appendField("Vrep_port")
      .appendField(new Blockly.FieldTextInput("19999"), "port");
    this.appendDummyInput()
      .appendField("Client_ID")
      .appendField(new Blockly.FieldTextInput("Client_ID"), "ClientName");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("初始化和链接Vrep服务器");
    this.setHelpUrl("");
  }
};
Blockly.Python['Vrepconnect'] = function (block) {
  var text_ip = block.getFieldValue('ip');
  var text_port = block.getFieldValue('port');
  var text_ClientName = block.getFieldValue('ClientName');
  var initialo = 'import vrep\nfrom time import sleep\nimport numpy as np\nfrom math import pi, cos, sin, atan2, sqrt, acos\nfrom numpy.linalg import norm\n';
  var code = 'vrep.simxFinish(-1)\n' + text_ClientName + ' = vrep.simxStart(\'' + text_ip + '\',\'' + text_port + '\', True, True, 5000, 5)';
  var check = 'if ' + text_ClientName + ' != -1:\n  print("Connected successful")\nelse:\n  raise Exception("Failed to connect")';
  return initialo + '\n' + code + '\n' + check;
};
Blockly.Blocks['Vrep3Init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Vrep3Init");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("三轴机器人的参数定义");
    this.setHelpUrl("");
  }
};
Blockly.Python['Vrep3Init'] = function (block) {
  var code1 = 'r1 = 0.063247\nh1 = 0.10601\nr2=0.11345\nh2=0.10561\nl2=0.154998\n';
  var code2 = 'theta2=0.749624\norigin2=1.850049\nr3=0.16145\nh3=-0.07919\nh4=-0.029195\n';
  var code3 = 'l3=0.179825\ntheta3=-0.456013\norigin3=0.645772\nr4=0.035278\n';
  return code1 + code2 + code3;
}


Blockly.Blocks['forwardkinematics'] = {
  init: function () {
    this.appendValueInput("input")
      .setCheck("Array")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("3JointKinematics"), "inputAng");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("forwardKinematics");
    this.setHelpUrl("");
  }
};

Blockly.Python['forwardkinematics'] = function (block) {
  var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var functionName = Blockly.Python.provideFunction_(
    'Vrepforwardkinematics',
    [
      'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(rads):',
      '  arm_r = r1 + l2 * cos(rads[2] + theta2) + l3 * cos(rads[2] + rads[3] + theta3) + r4',
      '  x = round(arm_r * cos(rads[1]), 4)',
      '  y = round(arm_r * sin(rads[1]), 4)',
      '  z = round(h1 + l2 * sin(rads[2] + theta2) + l3 * sin(rads[2] + rads[3] + theta3) + h4, 4)',
      '  return x,y,z']);
  var code = functionName + '(' + value_input + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
