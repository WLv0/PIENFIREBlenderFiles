#version 450
#include "compiled.inc"
#include "std/gbuffer.glsl"
in vec3 wnormal;
in vec2 texCoord;
out vec4 fragColor[2];
uniform sampler2D ImageTexture;
void main() {
	vec3 n = normalize(wnormal);
	vec4 ImageTexture_texread_store = texture(ImageTexture, texCoord.xy);
	vec3 basecol;
	float roughness;
	float metallic;
	float occlusion;
	float specular;
	float emission;
	float opacity;
	float ImageTexture_Alpha_res = ImageTexture_texread_store.a;
	float MixShader_fac = ImageTexture_Alpha_res;
	float MixShader_fac_inv = 1.0 - MixShader_fac;
	vec3 ImageTexture_Color_res = ImageTexture_texread_store.rgb;
	basecol = (vec3(0.8) * MixShader_fac_inv + ImageTexture_Color_res * MixShader_fac);
	roughness = (0.0 * MixShader_fac_inv + 0.0 * MixShader_fac);
	metallic = (0.0 * MixShader_fac_inv + 0.0 * MixShader_fac);
	occlusion = (1.0 * MixShader_fac_inv + 1.0 * MixShader_fac);
	specular = (1.0 * MixShader_fac_inv + 1.0 * MixShader_fac);
	emission = (0.0 * MixShader_fac_inv + 1.0 * MixShader_fac);
	opacity = ((1.0 - vec3(1.0, 1.0, 1.0).r) * MixShader_fac_inv + 1.0 * MixShader_fac) - 0.0002;
	if (opacity < 0.9999) discard;
	n /= (abs(n.x) + abs(n.y) + abs(n.z));
	n.xy = n.z >= 0.0 ? n.xy : octahedronWrap(n.xy);
	uint matid = 0;
	if (emission > 0) { basecol *= emission; matid = 1; }
	fragColor[0] = vec4(n.xy, roughness, packFloatInt16(metallic, matid));
	fragColor[1] = vec4(basecol, packFloat2(occlusion, specular));
}
