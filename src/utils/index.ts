export * from './constant';

export const getCopyRight = (copyright: string) => {
  const year = new Date().getFullYear().toString()
  return copyright.replace(new RegExp("%COPY_RIGHT%", "g"), year)
}