#version 450
in vec2 texCoord;
uniform sampler2D ImageTexture;
void main() {
	vec4 ImageTexture_texread_store = texture(ImageTexture, texCoord.xy);
	float opacity;
	float ImageTexture_Alpha_res = ImageTexture_texread_store.a;
	float MixShader_fac = ImageTexture_Alpha_res;
	float MixShader_fac_inv = 1.0 - MixShader_fac;
	opacity = ((1.0 - vec3(1.0, 1.0, 1.0).r) * MixShader_fac_inv + 1.0 * MixShader_fac) - 0.0002;
	if (opacity < 1.0) discard;
}
