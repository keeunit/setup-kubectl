import * as os from 'os'
import * as util from 'util'

export function getKubectlArch(): string {
  const arch = os.arch()
  if (arch === 'x64') {
    return 'amd64'
  }
  return arch
}

export function getKubectlDownloadURL(version: string, arch: string): string {
  const base = 'https://storage.googleapis.com/kubernetes-release'
  switch (os.type()) {
    case 'Linux':
      return `${base}/release/${version}/bin/linux/${arch}/kubectl`

    case 'Darwin':
      return `${base}/release/${version}/bin/darwin/${arch}/kubectl`

    case 'Windows_NT':
    default:
      return `${base}/release/${version}/bin/windows/${arch}/kubectl.exe`
  }
}

export function getExecutableExtension(): string {
  return os.type().match(/^Win/) ? '.exe' : ''
}
