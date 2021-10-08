Blockly.Blocks['Vrepconnect'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Vrep_ip")
      .appendField(new Blockly.FieldTextInput("127.0.0.1"), "ip");
    this.appendDummyInput()
      .appendField("Vrep_port")
      .appendField(new Blockly.FieldTextInput("19999"), "port");
    this.appendDummyInput()
      .appendField("JointNum")
      .appendField(new Blockly.FieldDropdown([["3Joint", "3"], ["5Joint", "5"]]), "jointnumb");
    this.appendValueInput("client")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("ClientID"), "ID");
    this.appendValueInput("Jointhandles")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("Jointhandles"), "jh");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("初始化和链接Vrep服务器");
    this.setHelpUrl("");
  }
};
Blockly.Python['Vrepconnect'] = function (block) {
  var dropdown_jointnumb = block.getFieldValue('jointnumb');
  var value_client = Blockly.Python.valueToCode(block, 'client', Blockly.Python.ORDER_ATOMIC);
  var value_Jointhandles = Blockly.Python.valueToCode(block, 'Jointhandles', Blockly.Python.ORDER_ATOMIC);
  var text_ip = block.getFieldValue('ip');
  var text_port = block.getFieldValue('port');
  var initialo = 'import vrep\nfrom time import sleep\nimport numpy as np\nfrom math import pi, cos, sin, atan2, sqrt, acos\nfrom numpy.linalg import norm\n';
  var code = 'vrep.simxFinish(-1)\n' + value_client + ' = vrep.simxStart(\'' + text_ip + '\',\'' + text_port + '\', True, True, 5000, 5)';
  var check = 'if ' + value_client + ' != -1:\n  print("Connected successful")\nelse:\n  raise Exception("Failed to connect")\n';
  var Jointconnect;
  if (dropdown_jointnumb == 3) {
    Jointconnect = 'res, ' + value_Jointhandles + '[0] = vrep.simxGetObjectHandle(clientID, \'Robot_joint1\', vrep.simx_opmode_blocking)\n';
    Jointconnect = Jointconnect + 'res, ' + value_Jointhandles + '[1] = vrep.simxGetObjectHandle(clientID, \'Robot_joint2\', vrep.simx_opmode_blocking)\n';
    Jointconnect = Jointconnect + 'res, ' + value_Jointhandles + '[2] = vrep.simxGetObjectHandle(clientID, \'Robot_joint3\', vrep.simx_opmode_blocking)\n';
    Jointconnect = Jointconnect + 'res, ' + value_Jointhandles + '[3] = vrep.simxGetObjectHandle(clientID, \'Robot_joint4\', vrep.simx_opmode_blocking)\n';
  } else {
    Jointconnect = '0\n';
  }
  return initialo + '\n' + code + '\n' + check + '\n' + Jointconnect;
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
    this.appendValueInput("inputA")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable(""), "InputA");
    this.appendValueInput("inputB")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("3JointKinematics"), "InputB");
    this.appendValueInput("inputC")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable(""), "InputC");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("forwardKinematics");
    this.setHelpUrl("");
  }
};

Blockly.Python['forwardkinematics'] = function (block) {
  var value_inputa = Blockly.Python.valueToCode(block, 'inputA', Blockly.Python.ORDER_ATOMIC);
  var value_inputb = Blockly.Python.valueToCode(block, 'inputB', Blockly.Python.ORDER_ATOMIC);
  var value_inputc = Blockly.Python.valueToCode(block, 'inputC', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var functionFor = Blockly.Python.provideFunction_(
    'functionFor',
    [
      'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(rads1,rads2,rads3):',
      '  arm_r = r1 + l2 * cos(rads2 + theta2) + l3 * cos(rads2 + rads3 + theta3) + r4',
      '  x = round(arm_r * cos(rads1), 4)',
      '  y = round(arm_r * sin(rads1), 4)',
      '  z = round(h1 + l2 * sin(rads2 + theta2) + l3 * sin(rads2 + rads3 + theta3) + h4, 4)',
      '  return x,y,z']);
  var code = functionFor + '(' + value_inputa + ',' + value_inputb + ',' + value_inputc + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Blocks['inversekinematics'] = {
  init: function () {
    this.appendValueInput("inputA")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable(""), "InputA");
    this.appendValueInput("inputB")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("3JointinvKinematics"), "InputB");
    this.appendValueInput("inputC")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable(""), "InputC");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("inversekinematics");
    this.setHelpUrl("");
  }
};

Blockly.Python['inversekinematics'] = function (block) {
  var value_inputa = Blockly.Python.valueToCode(block, 'inputA', Blockly.Python.ORDER_ATOMIC);
  var value_inputb = Blockly.Python.valueToCode(block, 'inputB', Blockly.Python.ORDER_ATOMIC);
  var value_inputc = Blockly.Python.valueToCode(block, 'inputC', Blockly.Python.ORDER_ATOMIC);
  var functionInv = Blockly.Python.provideFunction_(
    'functionInv',
    [
      'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(x,y,z):',
      '  rad1=round(atan2(y,x),4)',
      '  r = sqrt(pow(x, 2) + pow(y, 2)) - r1 - r4',
      '  h = z - h1 - h4',
      '  beta = atan2(h, r)',
      '  phi = acos((pow(r, 2) + pow(h, 2) + pow(l2, 2) - pow(l3, 2))/(2 * l2 * sqrt(pow(r, 2) + pow(h, 2))))',
      '  rad2 = beta + phi',
      '  rad3 = atan2(h - l2 * sin(rad2), r - l2 * cos(rad2))',
      '  rad2 = round(rad2 - theta2, 4)',
      '  rad3 = round(rad3 - theta3 - rad2, 4)',
      '  return rad1,rad2,rad3']);
  var code = functionInv + '(' + value_inputa + ',' + value_inputb + ',' + value_inputc + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['setJointRad'] = {
  init: function () {
    this.appendValueInput("inputA")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("RadA"), "InputA");
    this.appendValueInput("inputB")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("RadB"), "InputB");
    this.appendValueInput("inputC")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("RadC"), "InputC");
    this.appendValueInput("client")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("ClientID"), "ID");
    this.appendValueInput("Jointhandles")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldLabelSerializable("Jointhandles"), "jh");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("setJointRad");
    this.setHelpUrl("");
  }
};

Blockly.Python['setJointRad'] = function (block) {
  var value_inputa = Blockly.Python.valueToCode(block, 'inputA', Blockly.Python.ORDER_ATOMIC);
  var value_inputb = Blockly.Python.valueToCode(block, 'inputB', Blockly.Python.ORDER_ATOMIC);
  var value_inputc = Blockly.Python.valueToCode(block, 'inputC', Blockly.Python.ORDER_ATOMIC);
  var value_client = Blockly.Python.valueToCode(block, 'client', Blockly.Python.ORDER_ATOMIC);
  var value_Jointhandles = Blockly.Python.valueToCode(block, 'Jointhandles', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var functionSJR = '\n';
  var functionSJR =functionSJR+'vrep.simxSetJointTargetPosition('+value_client+', '+value_inputa+' , vrep.simx_opmode_oneshot)\n';
  var functionSJR =functionSJR+'vrep.simxSetJointTargetPosition('+value_client+', '+value_inputb+' , vrep.simx_opmode_oneshot)\n';
  var functionSJR =functionSJR+'vrep.simxSetJointTargetPosition('+value_client+', '+value_inputc+' , vrep.simx_opmode_oneshot)\n';
  var functionSJR =functionSJR+'vrep.simxSetJointTargetPosition('+value_client+', -'+value_inputa+'-'+value_inputc+' , vrep.simx_opmode_oneshot)\n';
  return functionSJR;
};